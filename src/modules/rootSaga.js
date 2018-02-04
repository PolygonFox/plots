import gameWatchers from './game/sagas'

export default function* () {
    yield [
        ...gameWatchers
    ]   
}