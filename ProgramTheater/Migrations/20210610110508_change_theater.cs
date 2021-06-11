using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgramTheater.Migrations
{
    public partial class change_theater : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Theater",
                newName: "Street");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Theater",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Theater",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Theater");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "Theater");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Theater",
                newName: "Location");
        }
    }
}
