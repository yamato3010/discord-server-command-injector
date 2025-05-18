# Add Slash Command for Minecraft Server

このリポジトリは、Discordのスラッシュコマンドを使用してMinecraftサーバーを操作するためのスクリプトを提供します。GitHub Actionsを使用してコマンドを簡単に追加できます。

## 機能

- Discordのスラッシュコマンドを作成
  - コマンド名: `minecraft`
  - オプション:
    - `start`: サーバーを起動
    - `stop`: サーバーを停止
- GitHub Actionsを使用して自動化

## ファイル構成

```
.env
.github/
  workflows/
    add-server-commands.yml
.gitignore
index.js
package.json
```

### 主なファイル

- **`index.js`**: Discord APIを使用してスラッシュコマンドを作成するスクリプト。
- **`.github/workflows/add-server-commands.yml`**: GitHub Actionsのワークフローファイル。スクリプトの実行を自動化します。
- **`package.json`**: プロジェクトの依存関係とスクリプトを定義。

## 必要な環境変数

`.env` ファイルに以下の環境変数を設定してください:

- `APP_ID`: DiscordアプリケーションのID
- `GUILD_ID`: DiscordサーバーのID
- `BOT_TOKEN`: Discordボットのトークン

## セットアップ

1. リポジトリをクローンします。

   ```bash
   git clone <リポジトリURL>
   cd add-slash-command
   ```

2. 必要な依存関係をインストールします。

   ```bash
   yarn install
   ```

3. .env ファイルを作成し、必要な環境変数を設定します。

4. スクリプトを実行します。

   ```bash
   yarn start
   ```

## GitHub Actionsの使用方法

1. add-server-commands.yml を使用して、GitHub Actionsでスクリプトを実行できます。
2. ワークフローを手動でトリガーし、`environment` を選択してください。

## 注意事項

- .env ファイルには機密情報が含まれるため、`.gitignore` に追加されています。
- Discord APIの仕様に基づいてスクリプトを実行します。
