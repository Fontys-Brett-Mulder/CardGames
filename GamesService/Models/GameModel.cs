namespace GamesService.Models
{
    public class GameModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Difficulty { get; set; }
        public int MinPlayers { get; set; }
        public int MaxPlayers { get; set; }
    }
}
