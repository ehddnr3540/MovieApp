
const Pagenation = (props) => {
  const pageLinks = []

  for (let i = 1; i <= props.pages + 1; i++) {

    let active = props.currentPage === i ? 'active' : '';
    pageLinks.push(
      <li className={`wave-effect ${active}`} key={i} onClick={() => props.nextPage(i)}>
        <a href="#">{i}</a>
      </li>
    )
    if (i === 10) {
      break
    }

  }
  return (
    <div className="pagenation-wrap">
      <ul className="pagenation">
        {pageLinks}
      </ul>
    </div>
  )
}

export default Pagenation
