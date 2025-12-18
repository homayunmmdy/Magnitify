import { EditorType } from "@/app/types/PropsTypes";
import React, { useCallback, useState } from "react";
import { FaLink, FaTimes, FaExternalLinkAlt, FaLink as FaInternalLink } from "react-icons/fa";

const LinkMenu: React.FC<EditorType> = ({ editor }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [linkType, setLinkType] = useState<"internal" | "external">("external");
  const [linkValue, setLinkValue] = useState("");
  const [linkText, setLinkText] = useState("");

  const handleOpenMenu = useCallback(() => {
    if (!editor) return;
    
    const previousUrl = editor.getAttributes("link").href;
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " "
    );

    if (previousUrl) {
      setLinkValue(previousUrl);
      // Check if it's an internal link
      setLinkType(previousUrl.startsWith("/post/") || previousUrl.startsWith("#") ? "internal" : "external");
    }
    
    if (selectedText) {
      setLinkText(selectedText);
    }
    
    setShowMenu(true);
  }, [editor]);

  const handleSaveLink = useCallback(() => {
    if (!editor) return;

    let finalUrl = linkValue.trim();
    
    if (!finalUrl) {
      // Empty URL - remove link
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      setShowMenu(false);
      return;
    }

    // Format internal links
    if (linkType === "internal") {
      // Handle different internal link formats
      if (finalUrl.startsWith("#")) {
        // Anchor link - keep as is
        // e.g., #section-name
      } else if (finalUrl.match(/^\/post\/\d+\/[^\/]+$/)) {
        // Already a complete post URL - keep as is
        // e.g., /post/123/slug-name
      } else if (finalUrl.match(/^\d+\/[^\/]+$/)) {
        // Has ID and slug but missing /post/ prefix
        // e.g., 123/slug-name
        finalUrl = `/post/${finalUrl}`;
      } else if (finalUrl.match(/^\d+$/)) {
        // Just an ID - we need a slug too
        // In a real app, you might want to fetch the slug from the API
        // For now, we'll assume the slug is the same as ID or empty
        finalUrl = `/post/${finalUrl}/`;
      } else {
        // Treat as slug-only - need ID and slug
        // In a real implementation, you'd need to look up the post ID
        // For now, we'll prompt or use a placeholder
        finalUrl = `/post/${finalUrl.replace(/^\//, '')}`;
      }
    } else {
      // External links - ensure protocol
      if (!finalUrl.match(/^https?:\/\//) && 
          !finalUrl.startsWith("mailto:") && 
          !finalUrl.startsWith("tel:") &&
          !finalUrl.startsWith("#") &&
          !finalUrl.startsWith("/")) {
        finalUrl = `https://${finalUrl}`;
      }
    }

    // Apply the link
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: finalUrl })
      .run();

    // Insert link text if provided and no text is selected
    if (linkText && editor.state.selection.from === editor.state.selection.to) {
      editor.chain().focus().insertContent(linkText).run();
    }

    setShowMenu(false);
    setLinkValue("");
    setLinkText("");
  }, [editor, linkValue, linkType, linkText]);

  const handleCancel = useCallback(() => {
    setShowMenu(false);
    setLinkValue("");
    setLinkText("");
  }, []);

  // Helper function to extract the display value for the input
  const getDisplayValue = useCallback(() => {
    if (linkType === "internal") {
      // Remove /post/ prefix and show just ID/slug or anchor
      return linkValue.replace(/^\/post\//, "").replace(/^#/, "");
    } else {
      // Remove https:// prefix for external links
      return linkValue.replace(/^https?:\/\//, "");
    }
  }, [linkValue, linkType]);

  // Helper function to format examples based on type
  const getPlaceholder = useCallback(() => {
    if (linkType === "internal") {
      return "123/article-slug or #section";
    } else {
      return "example.com";
    }
  }, [linkType]);

  if (!showMenu) {
    return (
      <button
        type="button"
        onClick={handleOpenMenu}
        className="w-10 h-10 cursor-pointer place-items-center flex items-center justify-center hover:bg-gray-100 rounded"
        title="Insert link"
      >
        <FaLink />
      </button>
    );
  }

  return (
    <div className="relative">
      {/* Modal Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-50" onClick={handleCancel} />
      )}
      
      {/* Wikipedia-style Modal */}
      <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-300 rounded shadow-lg w-80">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Insert link</h3>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
              title="Close"
            >
              <FaTimes />
            </button>
          </div>

          {/* Link Type Selection */}
          <div className="mb-4">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                type="button"
                onClick={() => setLinkType("internal")}
                className={`flex-1 py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                  linkType === "internal"
                    ? "bg-blue-100 text-blue-700 border-r border-gray-300"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaInternalLink className="text-xs" />
                Internal link
              </button>
              <button
                type="button"
                onClick={() => setLinkType("external")}
                className={`flex-1 py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                  linkType === "external"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaExternalLinkAlt className="text-xs" />
                External link
              </button>
            </div>
            
            <div className="mt-2 text-xs text-gray-500">
              {linkType === "internal" 
                ? "Links to other posts (e.g., /post/123/article-slug) or anchors (e.g., #section)" 
                : "Links to external websites (e.g., https://example.com)"}
            </div>
          </div>

          {/* URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {linkType === "internal" ? "Post ID/Slug or Anchor" : "URL"}
            </label>
            <div className="flex items-center">
              {linkType === "external" ? (
                <span className="bg-gray-100 px-3 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l">
                  https://
                </span>
              ) : !linkValue.startsWith("#") ? (
                <span className="bg-gray-100 px-3 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l">
                  /post/
                </span>
              ) : (
                <span className="bg-gray-100 px-3 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l">
                  #
                </span>
              )}
              <input
                type="text"
                value={getDisplayValue()}
                onChange={(e) => {
                  const value = e.target.value;
                  if (linkType === "internal") {
                    if (value.startsWith("#")) {
                      setLinkValue(value);
                    } else {
                      setLinkValue(value);
                    }
                  } else {
                    setLinkValue(value);
                  }
                }}
                className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded-r focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder={getPlaceholder()}
                autoFocus
              />
            </div>
            {linkType === "internal" && !linkValue.startsWith("#") && (
              <div className="mt-1 text-xs text-gray-500">
                Format: ID/slug (e.g., 123/my-article)
              </div>
            )}
          </div>

          {/* Link Text Input (optional) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link text (optional)
            </label>
            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Display text for the link"
            />
            <div className="mt-1 text-xs text-gray-500">
              Leave empty to use the selected text or URL
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveLink}
              disabled={!linkValue.trim()}
              className={`px-4 py-2 text-sm font-medium text-white rounded focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                linkValue.trim()
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-300 cursor-not-allowed"
              }`}
            >
              Insert link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkMenu;