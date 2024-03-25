import React from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import collaboration from "../../assets/collaboration.png";

function Form3({ form, setForm, error, setError }) {
  return (
    <View style={styles.containerForm}>
      <View style={styles.contentFormIcon}>
        <View style={styles.subContentFormIcon1}>
          <View style={styles.subContentFormBox1}></View>
          <View style={styles.iconForm1}>
            <MaterialCommunityIcons
              name="car-outline"
              size={35}
              color="#3567FC"
            />
            <MaterialCommunityIcons
              name="shield-check"
              size={22}
              color="#3567FC"
              style={{ position: "absolute", top: 3, left: 35 }}
            />
          </View>
          <View style={styles.contentTextIconForm1}>
            <Text style={styles.textForm1}>Foto SIM & STNK</Text>
          </View>
        </View>
        <View style={styles.subContentFormIcon2}>
          <View style={styles.subContentFormBox2}></View>
          <View style={styles.iconForm2}>
            <Image source={collaboration} alt="collaboration" style={styles.collaborationImage} />
            <Ionicons
              name="checkmark-circle"
              size={22}
              color="green"
              style={{ position: "absolute", top: 13, left: 22 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentInformationRegistrasiKlaim}>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Polisi</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>B 1234 EFG</Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>
            Nama tertanggung
          </Text>
          <Text style={styles.informationRegistrasiKlaimValue}>
            Fajar Prihadi
          </Text>
        </View>
        <View style={styles.subContentInformationRegistrasiKlaim}>
          <Text style={styles.informationRegistrasiKlaimKey}>No. Polis</Text>
          <Text style={styles.informationRegistrasiKlaimValue}>VCL2007001</Text>
        </View>
      </View>
      <View style={styles.contentFotoKerusakan}>
        <View style={styles.subContentKerusakan}>
          <TouchableOpacity>
            <AntDesign name="edit" size={20} color="green" />
          </TouchableOpacity>
          <Text style={styles.textKerusakan}>Foto Kerusakan 1</Text>
        </View>
        <View style={styles.subContentFotoKerusakan}>
          <View style={styles.fotoKerusakan}>
            <Image src="" alt="foto-kerusakan" />
          </View>
          <View style={styles.filenameKerusakan}>
            <Text style={styles.textFilenameKerusakan}>filee.jpg</Text>
            <Text style={styles.textFilesizeKerusakan}>1 Mb</Text>
          </View>
          <View style={styles.iconTrash}>
            <TouchableOpacity>
              <Feather name="trash-2" size={24} color="#3567FC" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContentDeskripsiKerusakan}>
          <TextInput
            style={styles.deskripsiKerusakan}
            placeholder="Deskripsi kerusakan"
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
      <View style={styles.subContentButtonTambah}>
        <TouchableOpacity style={styles.btnTambah}>
          <AntDesign name="pluscircleo" size={28} color="#3567FC" />
        </TouchableOpacity>
        <Text style={styles.textTambahFoto}>Tambah Foto</Text>
      </View>
      <View style={styles.subContentButtonSimpan}>
        <TouchableOpacity style={styles.btnSimpan}>
          <Text style={styles.textSimpan}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
  },
  contentFormIcon: {
    height: 50,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContentFormIcon1: {
    width: "58%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 1,
  },
  subContentFormBox1: {
    width: "5%",
    height: "100%",
    backgroundColor: "blue",
  },
  iconForm1: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  contentTextIconForm1: {
    width: "65%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  textForm1: {
    fontSize: 11,
    color: "#B3B3B3",
  },
  subContentFormIcon2: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 1,
  },
  subContentFormBox2: {
    width: "5%",
    height: "100%",
    backgroundColor: "green",
  },
  iconForm2: {
    width: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  collaborationImage: {
    width: 35,
    height: 35,
  },
  contentTextRegistrasiKlaim: {
    width: "100%",
    marginBottom: 30,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#F2F7FF",
  },
  textRegistrasiKlaim: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#3567FC",
  },
  contentInformationRegistrasiKlaim: {
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  subContentInformationRegistrasiKlaim: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  informationRegistrasiKlaimKey: {
    width: "50%",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  informationRegistrasiKlaimValue: {
    width: "50%",
    textAlign: "left",
    fontSize: 12,
    color: "#A8A8A8",
  },
  contentFotoKerusakan: {
    width: "100%",
  },
  subContentKerusakan: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textKerusakan: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "700",
    color: "#3567FC",
  },
  subContentFotoKerusakan: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  fotoKerusakan: {
    width: "40%",
    height: "100%",
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  filenameKerusakan: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#F2F7FF",
  },
  textFilenameKerusakan: {
    fontSize: 13,
    color: "#000000",
    paddingHorizontal: 5,
  },
  textFilesizeKerusakan: {
    fontSize: 10,
    color: "#A8A8A8",
    paddingHorizontal: 5,
  },
  iconTrash: {
    width: "10%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
  },
  subContentDeskripsiKerusakan: {
    width: "100%",
    marginBottom: 10,
  },
  deskripsiKerusakan: {
    borderColor: "#A8A8A8",
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  subContentButtonTambah: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1,
  },
  btnTambah: {
    marginRight: 10,
  },
  textTambahFoto: {
    color: "#3567FC",
  },
  subContentButtonSimpan: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#72F77D",
  },
  btnSimpan: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textSimpan: {
    color: "#FFFFFF",
  },
});

export default Form3;
