import React from "react";
import {addToStore,getRef} from "./firebase";
import {onValue} from "firebase/database";

class AddItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: Math.floor(Math.random() * 1000),
            imageUrl: '',
            linkUrl: '',
            length: 0
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        onValue(getRef(), (snapshot) => {
            const data = snapshot.val();
            this.setState({length:data.length})
        });
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.state.title === '' | this.state.imageUrl === '' | this.state.linkUrl === ''){
            alert("Empty feilds")
        }else{
            addToStore(this.state,this.state.length);
        }
    }

    handleImageChange(e){
        this.setState({imageUrl:e.target.value})
    }

    handleUrlChange(e){
        this.setState({linkUrl:e.target.value})
    }

    handleTitleChange(e){
        this.setState({title:e.target.value})
    }

    render(){
        return(
            <form className="add-form">
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange} name="title"/>
                </div>
                <div className="form-control">
                    <label htmlFor="image">Image Address</label>
                    <input type="text" value={this.state.imageUrl} onChange={this.handleImageChange} name="image" />
                </div>
                <div className="form-control">
                    <label htmlFor="url">linkUrl</label>
                    <input type="text" value={this.state.linkUrl} onChange={this.handleUrlChange} name="url" />
                </div>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default AddItem;