import React from 'react';
import TVPresenter from './TVPresenter';
import { tv } from '../../api';

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null,
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;

    try {
      ({
        data: { results: popular },
      } = await tv.getPopular());
      ({
        data: { results: topRated },
      } = await tv.getTopRated());
      ({
        data: { results: popular },
      } = await tv.getAiringToday());
    } catch (error) {
      console.log('TCL: TVContainer -> componentDidMount -> error', error);
      error = "Can't get TV";
    } finally {
      this.setState({
        popular,
        topRated,
        airingToday,
        error,
        loading: false,
      });
    }
  }

  render() {
    const { loading, popular, topRated, airingToday } = this.state;

    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
