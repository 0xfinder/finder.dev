import React from "react"
import { Link } from "gatsby"

const PostList = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <li key={node.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={node.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>
            {node.frontmatter.date} · {node.timeToRead} min read
          </small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}

export default PostList
