import Layout from "app/core/layouts/Layout"
import React, { useState } from "react"
import { Accordion, Button, Card, DropDown, Modal } from "app/core/components"
import { BlitzPage } from "blitz"
import { Color, Size } from "app/utils/tailwindHelpers"

const RC: BlitzPage = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <Button size={Size.small} bgColor={Color.green} textColor={Color.red}>
        Enable
      </Button>
      <DropDown options={["Helloo", "Joshu"]} onOptionSelect={(value) => console.log(value)} />
      <Card>Content</Card>
      <Accordion
        data={[
          { header: "Tittle", content: "This is content" },
          { header: "Tittle2", content: "This is content 2", active: true },
        ]}
      />
      <>
        <button
          id="myBtn"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setModalVisible(true)
          }}
        >
          Open Modal
        </button>

        {modalVisible && (
          <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
            Hello
          </Modal>
        )}
      </>
    </div>
  )
}

RC.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default RC
