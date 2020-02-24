# AngularChat
Angular学習のため作成した簡易チャットアプリ。  
主な機能としては  
ログイン・ログアウト
メッセージの投稿/削除
ユーザー新規登録
ユーザー詳細内容の表示  
となります。  

https://angular-chat-dcc8f.web.app/  

## DB構成
### Commentsテーブル
| Column | Type | Options |
| -- | -- | -- |
| date | Date | |
|  initial | String | |
|  message | String | |
|  user | String[] | |

### Itemテーブル
| Column | Type | Options |
| -- | -- | -- |
| initial | String | |
|  message | String | |
|  name | String | |

### Usersテーブル
| Column | Type | Options |
| -- | -- | -- |
| displayName | String | |
|  email | String | |
|  uid | String | |
