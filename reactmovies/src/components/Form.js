import {useState} from 'react';

const Form = ( props) => {
    const {movieSearch} = props;

    // State to hold the form data
    const [formData, setFormData] = useState({searchTerm: '', name: ''})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()//stop the form from refreshing the page
      movieSearch(formData.searchTerm)
      setFormData({searchTerm: ''})
    }
  return (
    <div>
      <form>
        <input type="text" value={formData.searchTerm} onChange={handleChange} 
        name="searchTerm" required/> <br/>

        <input type="text" value={formData.name} onChange={handleChange} 
        name="name" required/>
        
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Form;