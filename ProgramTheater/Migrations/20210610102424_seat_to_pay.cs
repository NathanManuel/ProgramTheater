using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgramTheater.Migrations
{
    public partial class seat_to_pay : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SeatL",
                table: "Ticket");

            migrationBuilder.AddColumn<int>(
                name: "pay",
                table: "Ticket",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "pay",
                table: "Ticket");

            migrationBuilder.AddColumn<string>(
                name: "SeatL",
                table: "Ticket",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
