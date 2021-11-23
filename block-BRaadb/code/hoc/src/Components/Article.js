import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      //   article: "",
    };
  }
  render() {
    return (
      <>
        <ul>
          {data.map((article) => (
            <>
              <li>
                <Link to={"/article/" + article.slug}>
                  <h3>{article.title}</h3>
                </Link>
                <small>{article.author}</small>
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}
export default Article;
