"use client";
import BreadCrump from "../../../ui/components/BreadCrump";
import CommentForm from "../../../ui/components/CommentForm";
import useBattle from "../../../ui/home/useBattle";
const Ticket = () => {
  const battle = useBattle();

  if (!battle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <img
            className="w-full p-3"
            src={battle.imgurl}
            title={battle.title}
            alt={battle.title}
            width="880"
            height="450"
            loading="lazy"
          />
          <BreadCrump />
          <div className="p-4">
            <h1 className="text-center mb-3">{battle.title}</h1>
            <p>
              <div id="pos-article-display-card-94403"></div>
              {battle.description}
            </p>
            <p>{battle.body}</p>
            <div id="pos-article-text-card-94410"></div>
            <div id="pos-article-display-94407"></div>
            <CommentForm />
          </div>
        </div>
        <div className="col-span-0 md:col-span-4 lg:col-span-3">
          <div id="pos-article-text-94696"></div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
