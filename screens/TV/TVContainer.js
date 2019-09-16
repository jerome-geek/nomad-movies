import React from 'react';
import TVPresenter from './TVPresenter';
import { tv } from '../../api';

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null,
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;

    try {
      ({
        data: { results: popular },
      } = await tv.getPopular());
      ({
        data: { results: airingThisWeek },
      } = await tv.getAiringThisWeek());
      ({
        data: { results: airingToday },
      } = await tv.getAiringToday());
    } catch (error) {
      console.log('TCL: TVContainer -> componentDidMount -> error', error);
      error = "Can't get TV";
    } finally {
      this.setState({
        popular,
        airingThisWeek,
        airingToday,
        error,
        loading: false,
      });
    }
  }

  render() {
    const { loading, popular, airingThisWeek, airingToday } = this.state;

    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        airingThisWeek={airingThisWeek}
        airingToday={airingToday}
      />
    );
  }
}
