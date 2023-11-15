const Header = ({bendrasKiekis,ragautuKiekis,neragautuKiekis}) => {
    return ( 
    <header>
    <p> Patiekalų kiekis:{bendrasKiekis}</p>
    <p>Ragautų patiekalų kiekis:{ragautuKiekis}</p>
    <p>Neragautų patiekalų kiekis:{neragautuKiekis}</p>
    </header>
     );
    
}
 
export default Header;