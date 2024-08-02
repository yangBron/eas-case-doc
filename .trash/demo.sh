function read_dir(){
	for file in 'ls $1'
	do
		if [ -d $1"/"$file ]
		then
			read_dir $1"/"$file
	else
		if [ $file == "demo.sh" ]
		then
			echo $file"此文件为本文件，不替换"
		else
			echo $1"/"$file "为文件”
			find -name $file | xargs perl -pi -e 's|<,unicode_literals|==,unicode_literals|g'
			find -name $file | xargs perl -pi -e 's|>,unicode_literals|==,unicode_literals|g'
		fi
	fi
	done
}

read_dir .
