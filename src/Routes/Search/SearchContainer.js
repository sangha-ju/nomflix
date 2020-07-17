import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi } from "../../api";

export default class extends Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const { 
                data: { results: movieResults } 
            } = await tvApi.search(searchTerm);
            const { 
                data: { results: tvResults } 
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "Can't not find results."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter 
                movieResults={ movieResults }
                tvResults={ tvResults }
                searchTerm={ searchTerm }
                loading={ loading }
                error={ error }
                handleSubmit={ this.handleSubmit }
            />
        )
    }
}