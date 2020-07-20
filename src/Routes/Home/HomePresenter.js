import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
    <>
        <Helmet>
                <title>Movies | NomFlix</title>
        </Helmet>
        { 
            loading ? <Loader /> : (
                <Container>
                    { nowPlaying && nowPlaying.length > 0 && (
                        <Section title="Now Playing">
                            { nowPlaying.map(movie => (
                                 <Poster
                                    key={ movie.id }
                                    id={ movie.id }
                                    imageUrl={ movie.poster_path }  
                                    title={ movie.original_title }
                                    rating={ movie.vote_average }
                                    year={ movie.release_date.substring(0, 4) }
                                    isMovie={ true }
                                 />
                            )) }
                        </Section>
                    ) }
                    { upcoming && upcoming.length > 0 && (
                        <Section title="Upcoming Movies">
                            { upcoming.map(movie => (
                                 <Poster
                                    key={ movie.id }
                                    id={ movie.id }
                                    imageUrl={ movie.poster_path }  
                                    title={ movie.original_title }
                                    rating={ movie.vote_average }
                                    year={ movie.release_date.substring(0, 4) }
                                    isMovie={ true } 
                                 />
                            )) }
                        </Section>
                    ) }
                    { popular && popular.length > 0 && (
                        <Section title="Popular Movies">
                            { popular.map(movie => (
                                 <Poster 
                                    key={ movie.id }
                                    id={ movie.id }
                                    imageUrl={ movie.poster_path }  
                                    title={ movie.original_title }
                                    rating={ movie.vote_average }
                                    year={ movie.release_date.substring(0, 4) }
                                    isMovie={ true }
                                 />
                            )) }
                        </Section>
                    ) }
                     { error && <Message color="#e74c3c" text={ error } /> }
                </Container>
            )
        }
    </>
);

HomePresenter.propsTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

const Container = styled.div `
    padding: 20px;
`;

export default HomePresenter;