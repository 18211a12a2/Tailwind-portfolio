import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id='about'>
        <div className='align-elements grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64'/>
            <article>
                <SectionTitle text="Code and Coffee" />
                <p className='mt-8 text-slate-600 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae hic natus optio reprehenderit nihil tenetur sequi error excepturi, voluptates maxime consequuntur magnam sapiente vero, vitae quam facilis dolorum! Facilis.</p>
            </article>
        </div>
    </section>
  )
}

export default About