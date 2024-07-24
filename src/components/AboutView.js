import Hero from './Hero'
const AboutView = () =>

    {
      return(
        <>
        <Hero text = "About Us"/>
        <div className="container">
        <div className="row">
          <div className ="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            
              BOX Movie Browser Downloader is regarded
                 as one of the go-to video downloader programs 
                 on the market due to the program's dependable performance
                  and user-friendly layout. The smooth navigation and overall 
                  feel of the software make it a good fit for the type of users 
                  it was designed for.
            </p>
          </div>
        </div>
      </div>
      </>
      )
    }
export default AboutView;