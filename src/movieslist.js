import React from 'react'
import { movie } from './movie'

const Movieslist = () => {
  return (
    <section>
        <article className='movieslist'>
            <div className='movie-card' style={{marginTop:'10%'}}>
                <img src={movie[0].image} />
                <div className='movie-info'>
                    <h2>{movie[0].title}</h2>
                    <span style={{paddingBottom:'50px ', fontSize:'smaller', color:'aqua'}}>{movie[0].genre}</span>
                    <p className='movie-name'>{movie[0].text}</p>
                    <p style={{padding:'20px 0px'}}>135 mins| Rated 18</p>
                    <p style={{padding:'10px 20px', backgroundColor:'#16161a', borderRadius:'2rem', marginRight:'13%'}}>04:40pm <span style={{color:'aqua'}}>Premium 2D</span></p>
                </div>
            </div>
            <div className='movie-card' style={{marginTop:'10%'}}>
                <img src={movie[1].image} />
                <div className='movie-info'>
                    <h2>{movie[1].title}</h2>
                    <span style={{paddingBottom:'50px ', fontSize:'smaller', color:'aqua'}}>{movie[1].genre}</span>
                    <p className='movie-name'>{movie[1].text}</p>
                    <p style={{padding:'20px 0px'}}>135 mins| Rated 18</p>
                    <p style={{padding:'10px 20px', backgroundColor:'#16161a', borderRadius:'2rem', marginRight:'36%'}}>04:40pm <span style={{color:'aqua'}}>Premium 2D</span></p>
                </div>
            </div>
            <div className='movie-card' style={{marginTop:'10%'}}>
                <img src={movie[2].image} />
                <div className='movie-info'>
                    <h2>{movie[2].title}</h2>
                    <span style={{paddingBottom:'50px ', fontSize:'smaller', color:'aqua'}}>{movie[2].genre}</span>
                    <p className='movie-name'>{movie[2].text}</p>
                    <p style={{padding:'20px 0px'}}>135 mins| Rated 18</p>
                    <p style={{padding:'10px 20px', backgroundColor:'#16161a', borderRadius:'2rem', marginRight:'36%'}}>04:40pm <span style={{color:'aqua'}}>Premium 2D</span></p>
                </div>
            </div>
            <div className='movie-card' style={{marginTop:'10%'}}>
                <img src={movie[3].image} />
                <div className='movie-info'>
                    <h2>{movie[3].title}</h2>
                    <span style={{paddingBottom:'50px ', fontSize:'smaller', color:'aqua'}}>{movie[3].genre}</span>
                    <p className='movie-name'>{movie[3].text}</p>
                    <p style={{padding:'20px 0px'}}>135 mins| Rated 18</p>
                    <p style={{padding:'10px 20px', backgroundColor:'#16161a', borderRadius:'2rem', marginRight:'13%'}}>04:40pm <span style={{color:'aqua'}}>Premium 2D</span></p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Movieslist