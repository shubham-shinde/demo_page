import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';
import * as data from './data';
import './table.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time : 0,
            msg : "",
            msg_time : 0,
            tooltip: {
                ind : 0,
                pos : {
                    top: '60px',
                    left: '200px'
                },
                msg : "Welcome to the Apstract demo!",
                all: [{
                    pos : {
                        top: '60px',
                        left: '200px'
                    },
                    click : { x: 244, y: 244},
                    msg : "Welcome to the Apstract demo!"

                },
                {
                    pos : {
                        top: '220px',
                        right: '-300px'
                    },

                    click : { x: 541, y: 326},
                    msg : "To get started, let's head to the store to explore In App Purchases",
                },
                {
                    pos : {
                        top: '250px',
                        right: '-300px'
                    },

                    click : { x: 319, y: 191},
                    msg : "Using Apstract enables other payment links, giving more money to the developer",
                },
                {
                    pos : {
                        top: '150px',
                        left: '200px'
                    },

                    click : { x: 319, y : 331},
                    msg : "Go ahead. Finish the payment.",
                },
                {
                    pos : {
                        top: '200px',
                        left: '270px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Yay! You bought a pack of cards! Hope we get some good cards.",
                },
                {
                    pos : {
                        top: '30px',
                        left: '30px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's see these changes taking place realtime on the blockchain",
                },
                {
                    pos : {
                        top: '30px',
                        left: '30px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's go sell some cards!",
                },
                {
                    pos : {
                        top: '180px',
                        right: '-300px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Buying and selling of cards can be done from the collection screen",
                },
                {
                    pos : {
                        top: '220px',
                        left: '200px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Choose a card that you want to sell",
                },
                {
                    pos : {
                        top: '270px',
                        left: '30px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's sell this card!",
                },
                {
                    pos : {
                        top: '220px',
                        left: '270px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's sell it for 2$",
                },
                {
                    pos : {
                        top: '20px',
                        left: '80px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's see what cards we can buy from the market place!",
                },
                {
                    pos : {
                        top: '170px',
                        left: '100px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Let's buy a card, because clearly that is what we want you to do now.",
                },
                {
                    pos : {
                        top: '170px',
                        left: '300px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Yay! You bought the card we wanted!",
                },
                {
                    pos : {
                        top: '60px',
                        left: '200px'
                    },

                    click : { x: 244, y: 244},
                    msg : "Now that you know your way around, you no longer have to do what we want you to. Have fun!",
                }]
                
            }
        }
        this.updateTables = this.updateTables.bind(this);
        this.handleIframeTask = this.handleIframeTask.bind(this);
        this.nextToolkit = this.nextToolkit.bind(this);
    }
    nextToolkit() {
        var iframe = document.querySelector('iframe');
        // function mouseclick(x, y){
            const newstate = {...this.state};
            newstate.tooltip.ind = newstate.tooltip.ind+1;
            var old_ind = newstate.tooltip.ind
            newstate.tooltip.pos = newstate.tooltip.all[old_ind+1].pos;
            newstate.tooltip.msg = newstate.tooltip.all[old_ind+1].msg;
            var { x, y} = newstate.tooltip.all[old_ind].click
            console.log(x,y);
            iframe.contentWindow.postMessage({type:'mouseclick', x: x, y: y}, '*');
            this.setState(newstate);
            // console.log('called');
        // }
    }
    
    handleIframeTask(details) {
        const newstate = {...this.state};
        newstate.msg = details.message && "pass object like { 'message': 'bla bla bla'}";
        newstate.msg_time = 1;
        console.log(details);
        this.setState(newstate);
    }

    showUserTable(key, userId, userName, ownedCardsCount, ownedCards, ownedPacks, ownedPacksCount, red) {
        return (
            <tr class={red && "red"} key={key}>
                <th>{userId}</th>
                <th>{userName}</th>
                {/* <th>{ownedCardsCount}</th> */}
                <th>{ownedCards.join(', ')}</th>
                {/* <th>{ownedPacksCount}</th> */}
                {/* <th>{ownedPacks.join(', ')}</th> */}
            </tr>
        )
        
    }
    showPackTable(key, packId, packType, owner, openedStatus, populatedCards, red) {
        return (
            <tr class={red && "red"} key={key}>
                {/* <th>{key}</th> */}
                <th>{packId}</th>
                <th>{packType}</th>
                <th>{owner}</th>
                {/* <th>{openedStatus}</th> */}
                <th>{openedStatus ? populatedCards.join(', ') : "Pack is Closed"}</th>
            </tr>
        )
        
    }
    showMarketTable(key, sellOrderId, status, owner, cardId, priceInDollars, red) {
        return (
            <tr class={red && "red"} key={key}>
                {/* <th>{key}</th> */}
                <th>{sellOrderId}</th>
                <th>{status}</th>
                <th>{owner}</th>
                <th>{cardId}</th>
                <th>{priceInDollars}</th>
            </tr>
        )
        
    }
    updateTables() {
        this.props.updateData();
        const newstate = {...this.state};
        newstate.time = 15;
        this.setState(newstate);
        console.log('called');
    }
    componentWillMount() {
        this.updateTables()
    }
    componentDidMount() {
        window.addEventListener('iframe_event', this.handleIframeTask);
        setInterval(() => {
            const newstate = {...this.state};
            newstate.time = newstate.time - 1;
            this.setState(newstate)
        }, 1000);
    }
    render() {
        var userDetails = this.props.data.new.userdata;
        var packDetails = this.props.data.new.packdata;
        var marketDetails = this.props.data.new.marketdata;
        // console.log(this.props.data);
        if(this.state.time<0) this.updateTables();
        return(
            <div style={{fontFamily:'Roboto'}}>
                <div style={{display:'flex', justifyContent: 'space-between', fontSize: '20px'}}>
                    <div style={{color:'white', background: '#E75D3F',fontFamily:'Roboto', padding:'10px 20px'}}>Apstract Demo</div>
                    <div style={{padding: '10px 20px', border: '1px solid #E75D3F'}}>Early Access</div>
                </div>
                <div style={{display:'flex', justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>
                    <div>
                    <iframe src="https://appetize.io/embed/fbwu5qwq4nak5uz3vb103jr07g?device=nexus5&scale=100&autoplay=true&orientation=landscape&deviceColor=black&xdocMsg=true" width="795px" height="400px" frameborder="0" scrolling="no"></iframe>
                    <div class="container" style={{...this.state.tooltip.pos, position:'absolute'}}>
                        {/* <h1>Guided tour tooltip</h1> */}
                        {/* <span class="close"></span> */}
                        
                        <div class="slider-container">
                            <div class="slider-turn">
                            <p style={{color:'black', fontSize: '20px', padding: '10px'}}>
                                {this.state.tooltip.msg}
                            </p>

                            {/* <p>
                                Dribbble shot visible at 
                            </p>

                            <p>
                                Codepen by Yoann Helin
                            </p>

                            <p>
                                <a href="https://twitter.com/YoannHELIN" title="Twitter" target="_blank">Twitter : @YoannHELIN</a>
                            
                            </p>

                            <p>Thank you !</p> */}
                            </div>
                        </div>

                        <div class="bottom">
                                {/* <div class="step">
                                <span></span>
                                <ul>
                                    <li data-num="1"></li>
                                    <li data-num="2"></li>
                                    <li data-num="3"></li>
                                    <li data-num="4"></li>
                                    <li data-num="5"></li>
                                </ul>
                                </div> */}
                            <button class="btn" style={{height:' 40px'}} onClick={this.nextToolkit}>Next</button>
                        </div>
                        </div>
                </div>
                    </div>
                <div style={{position: 'fixed', bottom: '0'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    {/* <h3 style={{padding: '10px',margin: '40px', borderBottom: '5px solid green'}}>Updated</h3> */}
                    <h3 style={{padding: '10px',margin: '40px', borderBottom: '5px solid #006DB8'}}>User Table</h3>
                    {/* <h3 style={{padding: '10px',margin: '40px', borderBottom: '5px solid #E75D3F'}}>Packs Table</h3> */}
                    <h4 style={{margin: '40px', padding: '10px'}}>Next Update in {this.state.time} sec</h4>
                </div>
                {/* <center>
                    <br/><br/>
                    <button onClick={this.updateTables} style={{width: '230px', height:'80px', background:'teal', color: 'white', fontSize: '20px', borderRadius: '45px', outline:'none'}}>
                        Reload Tables
                    </button>
                    <h3>Tables will automatically update in {this.state.time}</h3>
                    <br/><br/>
                    <h1>USER TABLE</h1>
                </center> */}

                <div style={{display:'flex', }}>
                    <table style={{width: '100%', border: '1px solid black'}}>
                        <tr>
                            <th>userId</th>
                            <th>userName</th>
                            {/* <th>ownedCardsCount</th> */}
                            <th>ownedCards</th>
                            {/* <th>ownedPacksCount</th> */}
                            {/* <th>ownedPacks</th> */}
                        </tr>
                        {
                            userDetails.map(d => this.showUserTable(d.key, d.userId, d.userName, d.ownedCardsCount, d.ownedCards, d.ownedPacks, d.ownedPacksCount, d.red))
                        }
                    </table>
                    { 
                        this.state.msg_time==1 &&
                        (<div style={{width: '500px', height: 'auto', border: '20px solid #ECECEC', padding: '10px'}}>
                            {this.state.msg}
                        </div>)
                    }
                </div>
                {/* <br/><br/>
                <center>
                    <h1>PACKS TABLE</h1>
                </center>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tr> */}
                        {/* <th>key</th> */}
                        {/* <th>packId</th>
                        <th>packType</th>
                        <th>owner</th> */}
                        {/* <th>openedStatus</th> */}
                        {/* <th>populatedCards</th>
                    </tr>
                    {
                        packDetails.map(d => this.showPackTable(d.key, d.packId, d.packType, d.owner, d.openedStatus, d.populatedCards, d.red))
                    }
                </table>

                <br/><br/>
                <center>
                    <h1>MARKET TABLE</h1>
                </center>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tr> */}
                        {/* <th>key</th> */}
                        {/* <th>sellOrderId</th>
                        <th>status</th>
                        <th>owner</th>
                        <th>cardId</th>
                        <th>priceInDollars</th>
                    </tr>
                    {
                        marketDetails.map(d => this.showMarketTable(d.key, d.sellOrderId, d.status, d.owner, d.cardId, d.priceInDollars, d.red))
                    }
                </table> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.data
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

