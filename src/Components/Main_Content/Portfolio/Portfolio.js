import IonIcon from "@reacticons/ionicons"
import React from "react"

import { portfolioItems } from "../../../data"

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="project-list">
          {portfolioItems.map((item, index) => {
            return (
              <li
                key={index}
                className="project-item  active"
                data-filter-item
                data-category="machine learning"
              >
                <a href={item.href}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <IonIcon name="eye-outline"></IonIcon>
                    </div>

                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </figure>

                  <h3 className="project-title">{item.title} </h3>

                  <p className="project-category">{item.category}</p>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
