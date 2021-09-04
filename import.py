import pandas as pd
from datetime import datetime
import mysql.connector
from mysql.connector import Error

fileData = pd.read_csv('dns_sample.csv',error_bad_lines=False)

# print("header", fileData.head())

for row in fileData.values:
  TimeOfNano = int(row[0])
  date = datetime.fromtimestamp(TimeOfNano)
  day = date.strftime("%Y/%m/%d %H:%M:%S")

  Date = day[0:11]
  time = day[12:]
  usec = TimeOfNano * 10e6
  SourceIP = row[1]
  SourcePort = row[2]
  DestinationIP = row[3]
  DestinationPort = row[4]
  FQDN = row[5]
  # all = (f"{Date},{time},{usec},{SourceIP},{SourcePort},{DestinationIP},{DestinationPort},{FQDN}")
  # print(all)
  # new_data = ""Date,Time,usec,SourceIP,SourcePort,DestinationIP,DestinationPort,FQDN""
  
  try:
    conn = mysql.connector.connect(host='172.17.0.2',
                                   user='root',
                                   password='123456',
                                   database='fileds',
                                   port='3306')
    
    sql = "INSERT INTO followingfields (`Date`,`Time`,`usec`,`SourceIP`,`SourcePort`,`DestinationIP`,`DestinationPort`,`FQDN`) VALUES ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}');".format(Date,time,usec,SourceIP,SourcePort,DestinationIP,DestinationPort,FQDN)
    print(sql)
    
    with conn.cursor(prepared=True) as cursor:
        cursor.execute(sql)
        conn.commit()
  except Error as e:
    print("Error while connecting to MySQL", e)
  finally:
    if (conn.is_connected()):
        cursor.close()
        conn.close()

