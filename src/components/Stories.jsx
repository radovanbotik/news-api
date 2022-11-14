import React from "react";
import { useGlobalContext } from "../utils/Context";
import { REMOVE_STORY } from "../utils/actions";

export default function Stories() {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <h2>'loading'</h2>;
  }
  return (
    <section className="stories">
      {hits.map(hit => {
        const { author, objectID: ID, title, url, num_comments, points } = hit;
        return (
          <article
            key={ID}
            style={{ border: "2px solid currentColor", marginBottom: "10px" }}
            data-id={ID}
          >
            <h4>{title}</h4>
            <p>
              {points} points by <span>{author}</span> |{" "}
              <span>{num_comments}</span> comments{" "}
            </p>
            <div>
              <a href={url} target="_blank" className="read-link">
                read more
              </a>
              <button
                className="remove-btn"
                style={{ color: "red" }}
                onClick={
                  e => removeStory(ID)
                  // removeStory(e.target.parentElement.parentElement.dataset.id)
                }
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
