﻿// <auto-generated />
using System;
using DashboardVisual.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DashboardVisual.Migrations
{
    [DbContext(typeof(DashboardDbContext))]
    partial class DashboardDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DashboardVisual.Models.Mytable", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime?>("Added")
                        .HasColumnType("datetime");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("End_year")
                        .HasColumnType("int");

                    b.Property<int?>("Impact")
                        .HasColumnType("int");

                    b.Property<string>("Insight")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Intensity")
                        .HasColumnType("int");

                    b.Property<int?>("Likelihood")
                        .HasColumnType("int");

                    b.Property<string>("Pestle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Published")
                        .HasColumnType("datetime");

                    b.Property<string>("Region")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Relevance")
                        .HasColumnType("int");

                    b.Property<string>("Sector")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Start_year")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Topic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Mytables");
                });
#pragma warning restore 612, 618
        }
    }
}
