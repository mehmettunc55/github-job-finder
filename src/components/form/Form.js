import axios from "axios";
import {useState, useEffect} from "react";
import './Form.css'
import JobCard from '../jobCard/JobCard'
import loadingLogo from '../../assets/loading.gif'
import error from '../../assets/404.png'

function Form() {

    const [job, setJob] = useState([]);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState()


    const jobList = () => {
        setLoading(true)
        axios.get( `/positions.json?description=${description}&location=${location}` )
        .then((res) => {
          setJob(res.data)
        })
        .then(() => setLoading(false) )
      }
    
      useEffect(() => {
       jobList()
      }, [])

      const handleTextLocation = (e) => {
        setLocation(e.target.value.toUpperCase())
      }

      const handleTextDescription = (e) => {
        setDescription(e.target.value.toUpperCase())
      }

      const handleSearch=(e)=>{
           e.preventDefault()
           setSearch(true)
        
          jobList()
          
      }

      

  return (
    <div>
      <div className="form">
      <p>GITHUB JOB FINDER</p>
        <input type="text" value={description} onChange={handleTextDescription} placeholder="DESCRIPTION" className='description'/>
        <input type="text" value={location} onChange={handleTextLocation} placeholder="LOCATION" className='location'/>
        <button onClick={handleSearch} className='search'>SEARCH</button>
      </div>
    
    {!search ? null : loading ?  <img  className='loadingLogo' src={loadingLogo} /> : job.length < 1 || (!description && !location) ? <img className="error" src={error} /> :  
        job?.map((jo, index) => (
        <JobCard 
      
        img={jo.company_logo}
        title={jo.title}
        name={jo.company}
        location={jo.location}
        type={jo.type}
        url={jo.company_url}
        />
      ))
    }
  </div>
  );
}

export default Form;
