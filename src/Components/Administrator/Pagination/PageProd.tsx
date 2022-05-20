import { Link } from 'react-router-dom';

interface typeNumber{
    postsPerPage:number,
    totalPosts:number,
    paginate:any
}

const PageProd = ({postsPerPage, totalPosts,paginate}:typeNumber)=> {
    const pageNumnbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumnbers.push(i);
    }
  return (
    <nav className='p-[10px]'>
        <ul className='pagination pagination-xl'>
            {pageNumnbers.map(number =>(
                <li key={number} className="page-item">
                    <Link onClick={()=> paginate(number)} to="" className='page-link'>
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
export default PageProd;