import { getGames } from "./gamesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/customReduxHooks";
import { useEffect } from "react";

const Games = () => {
    const dispatch = useAppDispatch(),
        games = useAppSelector(state => state.games);

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    useEffect(() => {
        console.log(games);
    }, [games]);



    return (
        <div>Games</div>
    )
}

export default Games