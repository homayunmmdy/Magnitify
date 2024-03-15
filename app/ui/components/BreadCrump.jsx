import Link from "next/link";
import React from "react";

const BreadCrump = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb" class="relative">
        <ol class="text-label flex space-x-2 justify-center" role="list">
          <li>
            <Link href="/" class="text-blue hover:underline">
              Home
            </Link>
          </li>

          {/* <li aria-hidden="true" class="text-black-lighter">
            /
          </li> */}

          {/* <li>
            <a href="/blog/" class="text-blue hover:underline">
              Blog
            </a>
          </li>

          <li aria-hidden="true" class="text-black-lighter">
            /
          </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrump;
