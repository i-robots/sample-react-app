import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { AnimatedList } from "react-animated-list";
import {onValue} from "firebase/database";
import {getRef} from "./firebase";

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: []
        };
    }

    componentDidMount(){
      onValue(getRef(), (snapshot) => {
        const data = snapshot.val();
        this.setState({ sections: data });
      });
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
              Data: {JSON.stringify(this.state.sections)}
                <AnimatedList animation={"grow"}>
                  {this.state.sections.map((c) => (
                    <ShopItem  item={c} key={c.id}/>
                  ))}
                </AnimatedList>
              </header>
            </div>
        );
    }
}

function ShopItem({ item }) {
    return (
      <Card style={{ margin: "10px" }}>
        <CardContent>{item.title}</CardContent>
        <img alt='IMG' src={item.imageUrl}/>
      </Card>
    );
}

export default Directory;