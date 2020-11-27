import React from 'react';
import './ChatHeader.css';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import WeekendIcon from '@material-ui/icons/Weekend';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MoodIcon from '@material-ui/icons/Mood';
function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>{channelName}
                </h3>
            </div>

            <div className="chatHeader_right">
                <WhatshotIcon fontSize="large" />
                <MoodIcon fontSize="large"/>
                <PeopleAltRoundedIcon fontSize="large" />

                <div className="chatHeader_search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon fontSize="large" />
                <WeekendIcon fontSize="large" />
            </div>
        </div>
    )
}

export default ChatHeader
