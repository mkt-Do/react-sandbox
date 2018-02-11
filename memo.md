# 開発用個人メモ

## Reduxについて
* 関数型Componentの場合はpropertiesは引数で受け取る(`this.propsは使えない`)
* combineReducerを用いた場合のstateはオブジェクトがネストしてるので対応するreducerを取り出す時はhoge.fugaのようにしないといけない

# Routingについて
* `webpackDevServer --history-api-fallback`としないとルーティングでURL直接打ちした場合に失敗(404)を返してしまう

