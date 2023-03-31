import intro_img from './assets/css/images/intro_pic.jpg'
import React from 'react';
import { Steps } from 'antd';


function Intro(){
	function importAll(r) {
		let images = {};
		r.keys().map(item => { images[item.replace('./', '')] = r(item); });
		return images;
	}
	
	const images = importAll(require.context('./assets/images/fulls/', false, /.jpg$/));
	console.log(images)
return (
    <div className="Intro">
        <introheader id="introheader">
				<div className="inner">
					<a className="image avatar"  style={{"display": "flex","justify-content": 'center','align-content': 'center','align-items': 'center'}}><img style={{"height" : "40vh","width":"auto"}} src={intro_img} alt="" /></a>
					<h1 style={{"text-align" : "center"}}><strong>I am Elaina</strong></h1>
					<h2>畢業於</h2>
					<h1>國立台灣大學機械工程學系</h1>
					<h1>______________________</h1>
					<h2>目前就讀</h2>
					<h1>國立台灣大學機械工程研究所流體力學組</h1>
				</div>
			
			</introheader>

			<div id="main">

					<section id="one">
						<introheader className="major">
							<h2>學歷<br />
							</h2>
						</introheader>
						
						<Steps
							progressDot
							current={-1}
							direction="vertical"
							style={{"color": "white"}}
							items={[
								{
									title: '2022~',
									description: '國立台灣大學機械工程研究所流體力學組',
								},
								{
									title: '2018 ~ 2022',
									description: '國立台灣大學機械工程學系',
								},
								{
									title: '2015 ~ 2018',
									description: '國立師範大學附屬高級中學數理資優班',
								}
							]}
						/>
						
					</section>

					<section id="two">
					<introheader className="major"><h2>近期作品</h2></introheader>
						<div className="row">
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" className="image fit thumb"><img src={images['01.jpg']} alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/02.jpg" className="image fit thumb"><img src={images['02.jpg']} alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/03.jpg" className="image fit thumb"><img src={images['03.jpg']} alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/04.jpg" className="image fit thumb"><img src={images['04.jpg']} alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/05.jpg" className="image fit thumb"><img src={images['05.jpg']} alt="" /></a>
								<h3>Nunc enim commodo aliquet</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/06.jpg" className="image fit thumb"><img src={images['06.jpg']} alt="" /></a>
								<h3>Risus ornare lacinia</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Full Portfolio</a></li>
						</ul>
					</section>

			</div>

			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
						<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
    </div>

)
}

export default Intro