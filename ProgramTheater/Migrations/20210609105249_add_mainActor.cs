using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProgramTheater.Migrations
{
    public partial class add_mainActor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FemaleActor",
                table: "Play");

            migrationBuilder.RenameColumn(
                name: "MaleActor",
                table: "Play",
                newName: "MainActor");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MainActor",
                table: "Play",
                newName: "MaleActor");

            migrationBuilder.AddColumn<Guid>(
                name: "FemaleActor",
                table: "Play",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
