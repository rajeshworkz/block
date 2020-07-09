import Link from 'next/link'
import Head from 'next/head'
const Layout = ({children, title}) => (
    <div>
    
        <Head>
      
       
    
       
      <title>Clean Blog</title>
    
      

  <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


  <link href="/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />

  <link href="/static/css/clean-blog.min.css" rel="stylesheet" />
    
    
    
    
        </Head>
        <header>
      
    
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">z</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
             <li className="nav-item">
                <Link href="/"><a className="nav-link">Home</a></Link>
              </li> 
              <li className="nav-item">
              <Link href="/about"><a className="nav-link">About</a></Link>
              </li>
              <li className="nav-item">
              <Link href="/services"><a className="nav-link">Services</a></Link>
              
              </li>
              <li className="nav-item">
              <Link href="/teams"><a className="nav-link">Teams</a></Link>
              </li>
              <li className="nav-item">
              <Link href="/contact"><a className="nav-link">Contact us</a></Link>
              </li>
    
           
            </ul>
          </div>
        </div>
      </nav>
    
    
    
        </header>
     
        
        
    {children}
     

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright &copy; Your Website 2020</p>
        </div>
      </div>
    </div>
  </footer>

    

  <script src="/static/vendor/jquery/jquery.min.js"></script>
  <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


  <script src="/static/js/clean-blog.min.js"></script>
    
    
    </div>
    
    )
    
    export default Layout;