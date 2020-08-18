import React, { useState } from "react"

const Search = (props) => {
   // Create blog posts pages.
   const allPosts = props.posts || []
   const emptyQuery = ""
   const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery,
   })
   const handleInputChange = event => {
      props.show()
      const query = event.target.value
      const filteredData = allPosts.filter(post => {
         const { description, title } = post.node.frontmatter
         return (
            description.toLowerCase().includes(query.toLowerCase()) ||
            title.toLowerCase().includes(query.toLowerCase())
         )
      })
      setState({
         query,
         filteredData,
      })
   }
   const { filteredData, query } = state
   const hasSearchResults = filteredData && query !== emptyQuery
   const posts = hasSearchResults ? filteredData : []

   return (
      <div className="search">
         <div className="search-input-wrap">
            <input type="text" id="search-input" className="search-input" tabIndex="0" placeholder="Search here" aria-label="Search here" autoComplete="off" onChange={handleInputChange} />
            <label htmlFor="search-input" className="search-label">
               <svg viewBox="0 0 24 24" className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"> <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line> </svg>
               </svg>
            </label>
         </div>
         <div id="search-results" className="search-results">
            <ul className="search-results-list">


               {(posts.length) ? posts.map(({ node }) => {
                  return (
                     <li className="search-results-list-item" key={node.fields.slug}>
                        <a className="search-result" href={__dirname + "/"+ node.fields.slug}>
                           <div className="search-result-title">
                              <div className="search-result-doc search-result-doc-parent">
                                 <svg viewBox="0 0 24 24" className="search-result-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline> </svg>
                                 </svg>
                                 <div className="search-result-doc-title">Category here</div>
                              </div>
                              <div className="search-result-section">{node.frontmatter.title}</div>
                              <span className="search-result-rel-url">tags can go here</span>
                           </div>
                           <div className="search-result-previews">
                              <div className="search-result-preview"><span> | </span>{node.frontmatter.description}</div>
                           </div>
                        </a>
                     </li>
                  )
               }) :
                  <li className="search-results-list-item">
                     <a className="search-result">
                        {/*<div className="search-result-title">
                           <div className="search-result-doc search-result-doc-parent">
                              <svg viewBox="0 0 24 24" className="search-result-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline> </svg>
                              </svg>
                              <div className="search-result-doc-title">Category here</div>
                           </div>
                           <div className="search-result-section">{node.frontmatter.title}</div>
                           <span className="search-result-rel-url">tags can go here</span>
            </div>*/}
                        <div className="search-result-previews">
                           <div className="search-result-preview"><span> | </span>OOPS..!! Found Nothing.</div>
                        </div>
                     </a>
                  </li>
               }

               {/*<li className="search-results-list-item">
            <a className="search-result" href="https://pmarsceill.github.io/just-the-docs/docs/ui-components/lists/#task-list">
               <div className="search-result-title">
                  <div className="search-result-doc search-result-doc-parent">
                     <svg viewBox="0 0 24 24" className="search-result-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline> </svg>
                     </svg>
                     <div className="search-result-doc-title">Lists</div>
                  </div>
                  <div className="search-result-section">Task list</div>
                  <span className="search-result-rel-url">/docs/ui-components/lists/#task-list</span>
               </div>
               <div className="search-result-previews">
                  <div className="search-result-preview"><span> | </span><span className="search-result-highlight">hello,</span><span> this is a todo item | </span><span className="search-result-highlight">hello,</span><span> this is another todo item | goodbye, this item is</span> ...</div>
                  <div className="search-result-preview"><span> - [ ] </span><span className="search-result-highlight">hello,</span><span> this is a todo item - [ ] </span><span className="search-result-highlight">hello,</span><span> this is another todo item - [x] goodbye, this item</span> ...</div>
               </div>
            </a>
         </li>
         <li className="search-results-list-item">
            <a className="search-result" href="https://pmarsceill.github.io/just-the-docs/docs/index-test/#header-2">
               <div className="search-result-title">
                  <div className="search-result-doc search-result-doc-parent">
                     <svg viewBox="0 0 24 24" className="search-result-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline> </svg>
                     </svg>
                     <div className="search-result-doc-title">Markdown kitchen sink</div>
                  </div>
                  <div className="search-result-section">Header 2</div>
                  <span className="search-result-rel-url">/docs/index-test/#header-2</span>
               </div>
               <div className="search-result-previews">
                  <div className="search-result-preview"><span> | </span><span className="search-result-highlight">Hello,</span><span> this is a TODO item | </span><span className="search-result-highlight">Hello,</span><span> this is another TODO item | Goodbye, this item is</span> ...</div>
               </div>
            </a>
   </li>*/}
            </ul>
         </div>
      </div>
   )
}

export default Search
