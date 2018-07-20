FROM microsoft/dotnet:sdk AS build-env
WORKDIR /core

# Copy csproj and restore as distinct layers
COPY ./core/core.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /core
COPY --from=build-env /core/out .
ENTRYPOINT ["dotnet", "aspnetapp.dll"]