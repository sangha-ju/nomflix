import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { moivesApi } from "../../api";

export default class extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const { data: { results: nowPlaying } } = await moivesApi.nowPlaying();
            const { data: { results: upcoming } } = await moivesApi.upcoming();
            const { data: { results: popular } } = await moivesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch {
            this.setState({
                error: "Can't find movie information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state
        return (
            <HomePresenter
                nowPlaying={ nowPlaying }
                upcoming={ upcoming }
                popular={ popular }
                error={ error }
                loading={ loading }
            />
        )
    }
}