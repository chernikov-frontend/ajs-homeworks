{
    "module": {
        "rules": [
            {
            "test": /\.tsx?$/,
            "exclude": /node_modules/,
            "use": {
                "loader": "ts-loader",
                "options": {}
            }
            },
            // другие правила ...
        ]
        },
    "resolve": {
        "extensions": [".ts", ".tsx", ".js"]
        }
// другие настройки ...
}