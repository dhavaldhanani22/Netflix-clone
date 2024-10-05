import './Content.css';
import RowData from '../../constants/URLS'
import Row from '../row/Row'

export default function Content() {

  return (
    <div className="content-wrapper">
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />
      })}
      <h2 className='developer-info'>© Netflix by Sunrose</h2>
      <ul class="icons alt">
							<li><a href="https://twitter.com/The_Sunrose" target="_blank" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a></li>
              <li><a href="https://www.facebook.com/sunrose.shrestha.19/" target="_blank" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/sunroseshrestha/" target="_blank" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a></li>
							<li><a href="https://www.linkedin.com/in/sunrose-shrestha-3406781b6/" target="_blank" class="icon brands fa-linkedin alt"><span class="label">LinkedIn</span></a></li>
							<li><a href="https://github.com/Sunrose-Shrestha" target="_blank" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
			</ul>
    </div>
  )
}
