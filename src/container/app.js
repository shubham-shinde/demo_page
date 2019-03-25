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
            time : 0
        }
        this.updateTables = this.updateTables.bind(this);
    }
    showUserTable(key, userId, userName, ownedCardsCount, ownedCards, ownedPacks, ownedPacksCount, red) {
        return (
            <tr class={red && "red"} key={key}>
                <th>{userId}</th>
                <th>{userName}</th>
                <th>{ownedCardsCount}</th>
                <th>{ownedCards.join(', ')}</th>
                <th>{ownedPacksCount}</th>
                <th>{ownedPacks.join(', ')}</th>
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
        this.setState({ time: 15 });
        console.log('called');
    }
    componentWillMount() {
        this.updateTables()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ time : this.state.time - 1})
        }, 1000);
    }
    render() {
        var userDetails = this.props.data.new.userdata;
        var packDetails = this.props.data.new.packdata;
        var marketDetails = this.props.data.new.marketdata;
        // console.log(this.props.data);
        if(this.state.time<0) this.updateTables();
        return(
            <div>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={{padding: '20px', fontSize: '20px', maxWidth: '400px'}}>
                        <h2>Buy Packs</h2>
                        <p>In app purchases can now be done via other payment getways ending 30% fees</p>
                        <br/>
                        <h2>Revenue++</h2>
                        <p>Get more from your in game sales and create a new stream from marketplace transections!</p>
                    </div>
                    <div>
                        <iframe src="https://appetize.io/embed/gc7hpac6pfpj053fw47adppne0?device=nexus5&scale=100&autoplay=false&orientation=landscape&deviceColor=black" width="795px" height="400px" frameBorder="0" scrolling="no"></iframe>
                    </div>
                    <div style={{padding: '20px', fontSize: '20px', maxWidth: '400px'}}>
                        <h2>Buy/Sell Cards</h2>
                        <p>In game items can be bought/sold directly from the marketplace</p>
                        <br/>
                        <h2>UX++</h2>
                        <p>Users don't need to be frustrated with opening endless lootboxes, they can get items directly from marketplace</p>
                    </div>
                </div>
                <center>
                    <br/><br/>
                    <button onClick={this.updateTables} style={{width: '230px', height:'80px', background:'teal', color: 'white', fontSize: '20px', borderRadius: '45px', outline:'none'}}>
                        Reload Tables
                    </button>
                    <h3>Tables will automatically update in {this.state.time}</h3>
                    <br/><br/>
                    <h1>USER TABLE</h1>
                </center>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tr>
                        <th>userId</th>
                        <th>userName</th>
                        <th>ownedCardsCount</th>
                        <th>ownedCards</th>
                        <th>ownedPacksCount</th>
                        <th>ownedPacks</th>
                    </tr>
                    {
                        userDetails.map(d => this.showUserTable(d.key, d.userId, d.userName, d.ownedCardsCount, d.ownedCards, d.ownedPacks, d.ownedPacksCount, d.red))
                    }
                </table>
                <br/><br/>
                <center>
                    <h1>PACKS TABLE</h1>
                </center>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tr>
                        {/* <th>key</th> */}
                        <th>packId</th>
                        <th>packType</th>
                        <th>owner</th>
                        {/* <th>openedStatus</th> */}
                        <th>populatedCards</th>
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
                    <tr>
                        {/* <th>key</th> */}
                        <th>sellOrderId</th>
                        <th>status</th>
                        <th>owner</th>
                        <th>cardId</th>
                        <th>priceInDollars</th>
                    </tr>
                    {
                        marketDetails.map(d => this.showMarketTable(d.key, d.sellOrderId, d.status, d.owner, d.cardId, d.priceInDollars, d.red))
                    }
                </table>
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

