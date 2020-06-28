import Model, { attr, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default class GameModel extends Model {
  @belongsTo('team', { inverse: 'homeGames' }) homeTeam;
  @belongsTo('team', { inverse: 'awayGames' }) awayTeam;
  @attr('number') homeGoals;
  @attr('number') awayGoals;
  @attr('date') playedOn;

  @computed('homeGoals', 'awayGoals')
  get isDraw() {
    return this.homeGoals === this.awayGoals;
  }

  @computed('homeGoals','awayGoals')
  get homeWon() {
    return this.homeGoals > this.awayGoals;
  }

  @computed('homeGoals','awayGoals')
  get awayWon() {
    return this.homeGoals < this.awayGoals;
  }

}
