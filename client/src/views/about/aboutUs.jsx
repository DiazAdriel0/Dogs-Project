import style from './aboutUs.module.css'
import me from './../../assets/fondo-blanco.jpg'

const AboutUs = () => {
	return (
		<div className={style.aboutContainer}>
			<div className={style.imageContainer}>
				<img className={style.image} src={me} alt='Profile Photo'></img>
			</div>
			<p className={style.paragraph}>
				Meet the canine master of web development! In my doggy world of web
				development, I embarked on an exciting adventure with cutting-edge
				technologies. As a loyal advocate of React, Redux, and JavaScript, I
				build an online experience full of amazing barks and impressive
				functionalities. My ability to handle SQL databases, along with tools
				like Sequelize and PostgreSQL, allows me to store information about the
				incredible dog breeds you&apos;ll find on my page. With my leash of
				Express and Node.js, I delve into the world of the back-end to create a
				smooth and fast experience. I&apos;m an expert at taming the power of
				CSS modules, giving each page a unique and appealing style. Join me on
				this thrilling journey as we explore the universe of dogs with
				state-of-the-art technology! Together, we&apos;ll create a page that
				will captivate dog lovers and web development enthusiasts alike.
			</p>
		</div>
	)
}

export default AboutUs
