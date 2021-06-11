using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgramTheater.Migrations
{
    public partial class changed_price_to_seat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Ticket",
                newName: "SeatL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatL",
                table: "Ticket",
                newName: "Price");
        }
    }
}
