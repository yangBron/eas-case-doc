#!/bin/bash
<<EOF
刷新用例内highlight格式
作者：杨凡
日期：2023-12-13
EOF
function r(){
for file in `ls $1`
do
    if [ -d $1"/"$file ]
    then
        if [ $file == "4.小电容布局用例库" ]
        then
            echo $file"此目录排除，不替换"
        else
            echo $1"/"$file"为目录"
            r $1"/"$file
        fi
    else
        if [ $file == "highlight.sh" ]
        then
            echo $file"此文件为本文件，不替换"
        else
            #替换文本内容  
            echo $1"/"$file "为文件"
            find -name $file | xargs perl -pi -e 's|<|==|g'
            find -name $file | xargs perl -pi -e 's|> |== |g'
        fi
           fi
done
}
r .
