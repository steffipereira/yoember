import Service, { inject as service } from '@ember/service';
import { later } from '@ember/runloop';
import { shuffle } from 'ember-composable-helpers/helpers/shuffle';
import { computed } from '@ember/object';

export default class GameSimulatorService extends Service {
  @service store;
  @computed
  get games() {
    return this.store.findAll('game');
  }

  @computed
  get teams() {
    return this.store.findAll('team');
  }

  constructor() {
    super(...arguments);
    this.seedTeam();
    later(this, this.simulateGame, 3000);
  }

  seedTeam() {
    let teamNames = [
      'Liverpool',
      'Chelsea',
      'Manchester City',
      'Arsenal',
      'Tottenham',
      'Bournmouth',
      'Watford',
      'Manchester United',
      'Everton',
      'Wolves',
      'Brighton',
      'Leicester City',
      'West Ham',
      'Crystal Palace',
      'Burnley',
      'Southamptom',
      'Cardiff City',
      'Fulham',
      'Newcastle United',
      'Huddersfield Town'
    ];
    for (let i = 0; i < teamNames.length; i++) {
      this.store.createRecord('team', {
        id: i,
        name: teamNames[i]
      });
    }
  }

  async simulateGame() {
    let teams = await this.store.findAll('team');
    let shuffleTeams = shuffle(teams);
    let homeTeam = shuffleTeams[0];
    let awayTeam = shuffleTeams[1];
    let homeGoals = this.randomGoals(4);
    let awayGoals = this.randomGoals(3);

    this.store.createRecord('game', {
      homeTeam,
      awayTeam,
      homeGoals,
      awayGoals,
      playedOn: new Date(),
    });
    //later(this, this.simulateGame, 3000);
  }

  randomGoals(max) {
    return Math.round(Math.random() * max)
  }
}
