import React, {useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";
import {useActions} from "../hooks/useActions";

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests,events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username);
    }, [user])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    return (
        <div className='calendar-wrapper'>
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button
                    className='my-10'
                    onClick={() => setModalVisible(true)}
                >Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    submit={addNewEvent}
                    guests={guests}
                />
            </Modal>
        </div>
    );
};

export default Home;
