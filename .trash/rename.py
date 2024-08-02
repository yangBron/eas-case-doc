import os


def rename_files():
    prefix = input("请输入自定义数字x：")
    start_index = int(input("请输入其实索引："))
    index = start_index
    for file_name in os.listdir('.'):
        if file_name.startswith('T'):
            start = file_name.index('_') + 1
            end = file_name.index('-', start)
            test = "Test"
            new_name = f"{test}_{prefix}.{index:04}{file_name[end:]}"
            os.rename(file_name, new_name)
            print(f"将文件 {file_name} 重命名为：{new_name}")
            index += 1


rename_files()
