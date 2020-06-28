import Model, { attr, hasMany } from '@ember-data/model';
import { union, filterBy, sum, mapBy } from '@ember/object/computed';
import { computed } from '@ember/object';

export default class TeamModel extends Model {
  @attr('string') name;
  @hasMany('game', { inverse: 'homeTeam' }) homeGames;
  @hasMany('game', { inverse: 'awayTeam' }) awayGames;

  @union('homeGames', 'awayGames') gamesPlayed;

  //@filterBy('games', 'isDraw') gamesDrawn;

  @filterBy('homeGames', 'homeWon') homeGamesWon;
  @filterBy('awayGames', 'awayWon') awayGamesWon;
  @union('homeGamesWon','awayGamesWon') gamesWon;

  @filterBy('awayGames', 'homeWon') awayGamesLost;
  @filterBy('homeGames', 'awayWon') homeGamesLost;
  @union('homeGamesLost','awayGamesLost') gamesLost;

  @mapBy('homeGames', 'homeGoals') homeGoalsScoredArray;
  @sum('homeGoalsScoredArray') homeGoalsScored;

  @mapBy('awayGames', 'awayGoals') awayGoalsScoredArray;
  @sum('awayGoalsScoredArray') awayGoalsScored;

  @computed('homeGoalsScored', 'awayGoalsScored')
  get goalScored() {
    return this.homeGoalsScored + this.awayGoalsScored;
   }

  @mapBy('homeGames', 'awayGoals') homeGoalsConcededArray;
  @sum('homeGoalsConcededArray') homeGoalsConceded;

  @mapBy('awayGames', 'homeGoals') awayGoalsConcededArray;
  @sum('awayGoalsConcededArray') awayGoalsConceded;

  @computed('homeGoalsConceded', 'awayGoalsConceded')
  get goalConceded() {
    return this.homeGoalsConceded + this.awayGoalsConceded;
  }

  @computed('goalScored','goalConceded')
  get goalDiff() {
    return this.goalScored - this.goalConceded;
  }

  @computed('gamesWon','gamesLost')
  get gamePoints() {
    return this.gamesWon.length - this.gamesLost.length;
  }
}
