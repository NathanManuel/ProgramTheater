using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgramTheater.Migrations
{
    public partial class add_Play : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Play",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PlayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaleActor = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FemaleActor = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Producer = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Theater = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Play", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Play");
        }
    }
}
