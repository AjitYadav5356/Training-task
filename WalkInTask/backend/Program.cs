using backend.Procedures;
using Microsoft.EntityFrameworkCore;
using mysqlconnection.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<WalkInContext>(
    options => 
    {
        options.UseMySql(builder.Configuration.GetConnectionString("mysqlconnection"),
        Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.29-mysql"));
    });

builder.Services.AddDbContext<walkInDetailContext>(
    options => 
    {
        options.UseMySql(builder.Configuration.GetConnectionString("mysqlconnection"),
        Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.29-mysql"));
    });

    builder.Services.AddDbContext<fullWalkInContext>(
    options => 
    {
        options.UseMySql(builder.Configuration.GetConnectionString("mysqlconnection"),
        Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.29-mysql"));
    });

builder.Services.AddCors(p=>p.AddPolicy("corspolicy",build =>
    {
        build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
    }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corspolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
